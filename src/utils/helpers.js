class helpers {
    static generateSlug(name) {
        if (!name || typeof name !== 'string') {
            console.warn("Slug received invalid value:", name);
            return '';
        }

        return name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
}

module.exports = helpers;
