import db from "@/lib/prismadb";
import { SizeForm } from "./components/size-form";
import { ObjectId } from 'mongodb';

const SizePage = async ({
  params
}: {
    params: { sizeId: string }
}) => {

    let sizeId: string | undefined = params.sizeId;

    if (params.sizeId === 'new') {
      sizeId = new ObjectId().toHexString();
    }
    
    const size = await db.size.findUnique({
      where: {
        id: sizeId
      }
    });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}

export default SizePage;
