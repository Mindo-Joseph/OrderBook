import { Product } from '@src/@types';

import cn from 'classnames';
import React, { useRef, useState } from 'react';

import { OrderBookHeader } from '../OrderBookHeader';
import { OrderBookPanel } from '../OrderBookPanel';
import { productsGroupings } from '../constants';
import { useOrderBookResize, useWorkerData } from './hooks';
import { orderBookContainer } from './orderBook.module.scss';
import { getGroupedOrderBook } from './util';
import { SharedWorkerFunctionsContext } from '@src/providers';
import { useContext } from 'react';
import {
    button,
    kill,
    toggle,
} from '../OrderBookHeader/orderBookHeader.module.scss';


function OrderBook() {
    const [groupingValues, setGroupingValues] = useState(
        productsGroupings.PI_XBTUSD[0].values,
    );

    const [product, setProduct] = useState<Product>(Product.PI_XBTUSD);

    const orderBook = useWorkerData(product);
    const sharedWorkerFunctions = useContext(SharedWorkerFunctionsContext);
    const groupedOrderBook = getGroupedOrderBook(orderBook, groupingValues);
    const orderBookRef = useRef<HTMLDivElement>(null);
    const isMobileView = useOrderBookResize(orderBookRef);
    const [groupingIndex, setGroupingIndex] = useState(0);

    const [groupingOptions, setGroupingOptions] = useState(
        productsGroupings.PI_XBTUSD,
    );


    const killFeed = () => {
        sharedWorkerFunctions.triggerError();
    };

    const switchProduct = () => {
        console.debug('OrderBookHeader 42', product);
        const nextProduct =
            product === Product.PI_XBTUSD
                ? Product.PI_ETHUSD
                : Product.PI_XBTUSD;

        setProduct(nextProduct);
        setGroupingOptions(productsGroupings[nextProduct]);
        setGroupingIndex(0);
    };

    return (
        <section>
            <OrderBookHeader
                product={product}
                setProduct={setProduct}
                groupingValues={groupingValues}
                setGroupingValues={setGroupingValues}
            />
            <div className={cn(orderBookContainer)} ref={orderBookRef}>
                <OrderBookPanel
                    isMobileView={isMobileView}
                    theme="red"
                    groupedValues={groupedOrderBook.groupedAsks}
                />
                <OrderBookPanel
                    isMobileView={isMobileView}
                    theme="green"
                    groupedValues={groupedOrderBook.groupedBids}
                />
            </div>
            <br></br>
             <div>
                <button
                    type="button"
                    className={cn(button, toggle)}
                    onClick={switchProduct}
                >
                    Toggle Feed
                </button>
                <button
                    type="button"
                    className={cn(button, kill)}
                    onClick={killFeed}
                >
                    Kill Feed
                </button>
            </div>
           
        </section>
        
    );
}

export default OrderBook;
