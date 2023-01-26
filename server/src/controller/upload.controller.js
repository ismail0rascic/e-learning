import multer from "multer";

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/src/images");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Image is Allowed..."));
  }
};
const up = multer({
  storage: multerConfig,
  fileFilter: isImage,
});

export const uploadImage = up.single("photo");

export const upload = async (req, res) => {
  res.status(200).json(req.file);
};
