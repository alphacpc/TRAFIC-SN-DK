import {FC, ReactNode} from 'react';
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from 'react-icons/hi2';
import { IoTrainOutline } from 'react-icons/io5';

type PanelStatComponentProps = {
        title: string;
        count_glo: number;
        count_in: number;
        label_in: string;
        count_out: number;
        label_out: string;
        IconTitle: ReactNode;
};

const PanelStatCompoment : FC<PanelStatComponentProps> = (
        {
                title, count_glo, count_in, 
                label_in, count_out, label_out, 
                IconTitle
        }) => {
                return (
                        <div className="div-panel-stat-trafic w-[14vw] border-2 border-bla rounded-md shadow-lg p-4 
                                flex flex-col items-center justify-center">
                                
                                {IconTitle}
                                
                                <p className="text-4xl mt-4">{count_glo}</p>
                                <p>{title}</p>
                                
                                <div className="flex items-center">
                                
                                        <div className="p-2 flex items-center">
                                                <HiOutlineArrowLongUp className="text-green-600" size={20} />
                                                <span className="font-bold">{`${count_in} ${label_in}`}</span>
                                        </div>

                                        <div className="p-2 flex items-center">
                                                <HiOutlineArrowLongDown className="text-red-600" size={20} />
                                                <span className="font-bold">{`${count_out} ${label_out}`}</span>
                                        </div>

                        </div>
                </div>
        )
}

export default PanelStatCompoment;