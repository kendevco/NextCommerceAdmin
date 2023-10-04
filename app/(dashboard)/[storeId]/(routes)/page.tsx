import React from 'react'


interface DashboardPageProps {
  params: {
    storeId: string;
  };
};

const DashboardPage: React.FC<DashboardPageProps> = async ({ 
  params
}) => {
  return (
    <div>
        Dashboard Page for Store {params.storeId}
    </div>
  )
}

export default DashboardPage