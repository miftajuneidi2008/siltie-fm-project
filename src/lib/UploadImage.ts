import path from "path";
import fs from "fs/promises";
export const UploadImage = async (file: File) => {
    const upload_directory = path.join(process.cwd(), "uploads");
    
      const images = file;
      await fs.mkdir(upload_directory, { recursive: true });
      const filename = `${crypto.randomUUID()}-${images.name}`;
      const filePath = path.join(upload_directory, filename);
      await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));
    
      const url =  `uploads/${filename}`;
      return url;
}