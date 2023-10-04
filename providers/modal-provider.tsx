"use client";

import { StoreModal } from '@/components/modals/store-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {

    // Prevents SSR issues with useModal
    const [isMounted, setIsMounted] = useState(false);
    // Prevents SSR issues with useModal    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    // Prevents SSR issues with useModal
    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <StoreModal />
        </div>
    );
};

export default ModalProvider;