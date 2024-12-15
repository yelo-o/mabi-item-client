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

const ItemTable: React.FC<ItemGridProps> = ({ items }) => {
    return (
        <>
            <table className="table-auto border border-slate-400">
                <thead>
                <tr>
                    <th className="border border-slate-300">Image</th>
                    <th className="border border-slate-300">category</th>
                    <th className="border border-slate-300">Item_name</th>
                    <th className="border border-slate-300">Description</th>
                </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-slate-300">
                                <Image
                                    src={item.img_url}
                                    alt={item.item_name}
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-md"
                                />
                            </td>
                            <td className="border border-slate-300">{item.category}</td>
                            <td className="border border-slate-300">{item.item_name}</td>
                            <td className="border border-slate-300">{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ItemTable;