"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slugify = require('slugify');
const generateUniqueSlug = async (title, locale, collectionType, currentSlug = null) => {
    console.log('generateUniqueSlug called with:', { title, locale, collectionType, currentSlug });
    const baseSlug = slugify(title || 'untitled', {
        lower: true,
        strict: true
    });
    console.log('Generated baseSlug:', baseSlug);
    // Сначала проверяем базовый slug без номера
    const query = {
        where: { slug: baseSlug }
    };
    if (locale) {
        query.locale = locale;
    }
    if (currentSlug) {
        query.where = {
            ...query.where,
            $and: [
                { slug: baseSlug },
                { slug: { $ne: currentSlug } }
            ]
        };
    }
    const existing = await strapi.db.query(collectionType).findOne(query);
    // Если нет конфликта, возвращаем базовый slug
    if (!existing) {
        console.log('Using baseSlug (no conflicts):', baseSlug);
        return baseSlug;
    }
    // Если есть конфликт, ищем первый св��бодный номер
    let counter = 1;
    let slug = baseSlug;
    let exists = true;
    while (exists) {
        slug = `${baseSlug}-${counter}`;
        console.log('Trying slug with number:', slug);
        const queryWithNumber = {
            where: { slug }
        };
        if (locale) {
            queryWithNumber.locale = locale;
        }
        if (currentSlug) {
            queryWithNumber.where = {
                ...queryWithNumber.where,
                $and: [
                    { slug },
                    { slug: { $ne: currentSlug } }
                ]
            };
        }
        const existingWithNumber = await strapi.db.query(collectionType).findOne(queryWithNumber);
        if (!existingWithNumber) {
            exists = false;
        }
        else {
            counter++;
        }
    }
    console.log('Final slug:', slug);
    return slug;
};
exports.default = {
    async beforeCreate(event) {
        const { data } = event.params;
        if (!data.slug) {
            try {
                event.params.data.slug = await generateUniqueSlug(data.title, data.locale, 'api::team.team');
            }
            catch (error) {
                console.error('Error generating slug:', error);
                throw error;
            }
        }
    },
    async beforeUpdate(event) {
        const { data, where } = event.params;
        if (data.title && !data.slug) {
            try {
                const existingEntry = await strapi.db.query("api::team.team").findOne({
                    where: { id: where === null || where === void 0 ? void 0 : where.id }
                });
                event.params.data.slug = await generateUniqueSlug(data.title, data.locale, 'api::team.team', existingEntry === null || existingEntry === void 0 ? void 0 : existingEntry.slug);
            }
            catch (error) {
                console.error('Error generating slug:', error);
                throw error;
            }
        }
    },
};
