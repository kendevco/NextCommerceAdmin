import prismadb from "@/lib/prismadb";
import { ColorForm } from "./components/color-form";
import { ObjectId } from 'mongodb';

const ColorPage = async ({
  params
}: {
    params: { colorId: string }
}) => {

    let colorId: string | undefined = params.colorId;

    if (params.colorId === 'new') {
      colorId = new ObjectId().toHexString();
    }
    
    const color = await prismadb.color.findUnique({
      where: {
        id: colorId
      }
    });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
}

export default ColorPage;
