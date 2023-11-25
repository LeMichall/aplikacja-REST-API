import path from "path";
import multer from "multer";

const tmpFolder = path.join(process.cwd(), "tmp");

const storage = multer.diskStorage({
  destination: tmpFolder,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

export const upload = multer({
  storage: storage,
});
