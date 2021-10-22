const db = require('../utils/database');

const category_08 = class category_08 {
    constructor(id, name, size, remote_url, local_url,  link_url) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }

    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * from category_08`);
            return results.rows;
        }   catch (e) {
            console.log('error', e);
        }
    }
}

module.exports = category_08;