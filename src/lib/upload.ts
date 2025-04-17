import fs from 'fs/promises'

export const UploadImage = async(images: File)=>
{
        await fs.mkdir(`public/product-images`, { recursive: true });
        const filePath = `public/product-images/${crypto.randomUUID()}-${
          images.name
        }`;
        await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));
        const url = filePath.replace("public", "");
        return url

}