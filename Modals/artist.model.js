import req from "express/lib/request";
import db from "../Config/db.config.js";

class ArtistModel {
    constructor() {
        // console.log('der er kaldt en instans af klassen ArtistModel');
    }

    list = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT s.id, s.title, a.name AS artist 
            FROM song s
            JOIN artist a
            ON s.artist_id = a.id`

            db.query(sql, (error, result) => {
                if (result) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    }
    get = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT s.id, s.title, s.content, s.artist_id, a.name AS artist, s.created 
            FROM song s
            JOIN artist a
            ON s.artist_id = a.id
            WHERE s.id = ?`

            db.query(sql, [req.params.id], (error, result) => {
                if (result) {
                    resolve(...result)
                } else {
                    reject(error)
                }
            })
        })
    }

    create = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `INSERT INTO song(title, content, artist_id)
            Values(?,?,?)`

            db.query(sql, arrValues, (error, result) => {
                if (result) {
                    resolve({ status: true, id: result.insertId })
                } else {
                    reject(error)
                }
            })
        })
    }

    update = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `UPDATE song SET title = ? content= ? artist_id = ? WHERE id = ?`

            db.query(sql, arrValues, (error, result) => {
                if (result) {
                    resolve({ status: true, id: req.body.id })
                } else {
                    reject(error)
                }
            })
        })
    }

    destroy = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `DELETE FROM song WHERE id =?`

            db.query(sql, [req.params.id], (error, result) => {
                if (result) {
                    resolve({ status: true,)
                } else {
                    reject(error)
                }
            })
        })
    }

    search = (req, res) => {
        return new Promise((resolve, reject) => {
            const search = req.query.keyword
            const arrValues = [`${req.query.keyword}%`, `${req.query.keyword}%`]
            const sql = `SELECT s.id, s.title, s.content, a.name AS artist 
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
    }

}

export default ArtistModel