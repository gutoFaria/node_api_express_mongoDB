import { RequestHandler } from "express";
import Video from "../model/Video";

export const createVideo: RequestHandler = async (req,res)=>{
    const videoFound = await Video.findOne({url:req.body.url})
    if(videoFound)
        return res.status(301).json({messae:'The URL already exists'})
    
    const video = new Video(req.body)
    const saveVideo =await video.save()
    res.json(saveVideo)
}

export const getVideos: RequestHandler = async (req,res)=>{
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error)
    }
 
}

export const getVideo: RequestHandler = async (req,res)=>{
    try {
        const videoFound = await Video.findById(req.params.id);
        if(!videoFound) return res.status(204).json();
        return res.json(videoFound);
    } catch (error) {
        res.json(error);
    }
}

export const deleteVideo: RequestHandler = async (req,res)=>{
    try {
        const videoFound = await Video.findByIdAndDelete(req.params.id);
        if(!videoFound) return res.status(204).json();
        return res.json(videoFound);
    } catch (error) {
        res.json(error);
    }
}

export const updateVideo: RequestHandler = async (req,res)=>{
    try {
        const videoUpdate = await Video.findByIdAndUpdate(req.params.id,req.body,{new : true});
        if(!videoUpdate) return res.status(204).json();
        return res.json(videoUpdate);
    } catch (error) {
        res.json(error);
    }
}