import React from 'react';
import Image from 'next/image';

interface Item {
    id: number;
    item_name: string;
    category: string;
    description: string;
    bundle_max: number;
    img_url: string;
}

interface ItemGridProps {
    items: Item[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative mb-2">
                        <Image
                            src={item.img_url}
                            alt={item.item_name}
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <h2 className="text-xl font-bold">{item.item_name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <p className="text-gray-700 line-clamp-2">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-2">최대 묶음: {item.bundle_max}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemGrid;