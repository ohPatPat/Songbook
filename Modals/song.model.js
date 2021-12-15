import db from "../Config/db.config.js";

class SongModel {
    constructor() {
        // console.log('der er kaldt en instans af klassen SongModel');
    }

    list = () => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT title FROM song LIMIT 10`

            db.query(sql, (error, result) => {
                if (result) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
        // return {status: 'OK'}
    }

    search = (req, res) => {
        return new Promise((resolve, reject) => {
            const search = req.query.keyword
            const limit = req.query.limit ? ` LIMIT ${req.query.limit}` : ''
            const arrValues = []

            for (let i = 1; 1 <= 2; i++) {
                arrValues.push(`%${req.query.keyword}%`)
            }

            const sql = `SELECT s.id, s.title, a.name AS artist 
            FROM song s
            JOIN artist a
            ON s.artist_id = a.id 
            WHERE s.title LIKE ?
            OR s.content LIKE ?
             `

            db.query(sql, arrValues, (error, result) => {
                if (result) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
        // return {status: 'OK'}
    }

}

export default SongModel