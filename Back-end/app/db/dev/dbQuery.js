import pool from "./pool"

export default {
    /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object
   */

    query(queryText, param) {
        return new Promise((resolve, reject) => {
            pool.query(queryText, param)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}