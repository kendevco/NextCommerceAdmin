import db from "@/lib/prismadb";
import { CategoryForm } from "./components/category-form";
import { ObjectId } from 'mongodb';

const CategoryPage = async ({
    params
}: {
    params: { categoryId: string, storeId: string }
}) => {

    let categoryId: string | undefined = params.categoryId;

    if (params.categoryId === 'new') {
      categoryId = new ObjectId().toHexString();
    }
    
    const category = await db.category.findUnique({
      where: {
        id: categoryId
      }
    });

    const billboards = await db.billboard.findMany(
      {
        where: {
          storeId: params.storeId
        }
      }
    );



  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
}

export default CategoryPage;