import express, { request, response } from "express";
import dotenv from "dotenv";
dotenv.config()


import {router as SongRouter} from './Routes/song.router.js'
import {router as ArtistRouter} from './Routes/artist.router.js'

const app=express()
app.use(express.urlencoded({
    extended: true
}))

const port =process.env.PORT || 4000 

app.use(SongRouter)
app.use(ArtistRouter)


app.listen(port, () => {
    console.log(`Køre på http://localhost:${port}`)
})