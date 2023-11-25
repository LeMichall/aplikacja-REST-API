import path from "path";
import jimp from "jimp";
import fs from "fs/promises";

import { User } from "../../models/users.js";

const avatarsFolder = path.join(process.cwd(), "public", "avatars");

export async function updateAvatar(req, res, next) {
  try {
    if (!req.file)
      return res.status(400).json({ message: "Missing avatar file" });
    const { _id } = req.user;
    const { path: tempUpload } = req.file;
    const avatarFileName = `${_id}_UserAvatar.jpg`;
    const resultUpload = path.join(avatarsFolder, avatarFileName);
    const avatarImage = await jimp.read(req.file.path);
    await avatarImage.resize(250, 250).writeAsync(req.file.path);
    await fs.rename(tempUpload, path.join(resultUpload));
    const avatarURL = `http://localhost:3000/avatars/${avatarFileName}`;
    await User.findByIdAndUpdate(_id, { avatarURL });
    return res.status(200).json({ avatarURL });
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Not authorized",
    });
  }
}
