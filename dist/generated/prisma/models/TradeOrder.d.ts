import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TradeOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$TradeOrderPayload>;
export type AggregateTradeOrder = {
    _count: TradeOrderCountAggregateOutputType | null;
    _avg: TradeOrderAvgAggregateOutputType | null;
    _sum: TradeOrderSumAggregateOutputType | null;
    _min: TradeOrderMinAggregateOutputType | null;
    _max: TradeOrderMaxAggregateOutputType | null;
};
export type TradeOrderAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
    price: runtime.Decimal | null;
};
export type TradeOrderSumAggregateOutputType = {
    amount: runtime.Decimal | null;
    price: runtime.Decimal | null;
};
export type TradeOrderMinAggregateOutputType = {
    id: string | null;
    side: string | null;
    type: string | null;
    amount: runtime.Decimal | null;
    price: runtime.Decimal | null;
    status: string | null;
    pair: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TradeOrderMaxAggregateOutputType = {
    id: string | null;
    side: string | null;
    type: string | null;
    amount: runtime.Decimal | null;
    price: runtime.Decimal | null;
    status: string | null;
    pair: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TradeOrderCountAggregateOutputType = {
    id: number;
    side: number;
    type: number;
    amount: number;
    price: number;
    status: number;
    pair: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TradeOrderAvgAggregateInputType = {
    amount?: true;
    price?: true;
};
export type TradeOrderSumAggregateInputType = {
    amount?: true;
    price?: true;
};
export type TradeOrderMinAggregateInputType = {
    id?: true;
    side?: true;
    type?: true;
    amount?: true;
    price?: true;
    status?: true;
    pair?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TradeOrderMaxAggregateInputType = {
    id?: true;
    side?: true;
    type?: true;
    amount?: true;
    price?: true;
    status?: true;
    pair?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TradeOrderCountAggregateInputType = {
    id?: true;
    side?: true;
    type?: true;
    amount?: true;
    price?: true;
    status?: true;
    pair?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TradeOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TradeOrderWhereInput;
    orderBy?: Prisma.TradeOrderOrderByWithRelationInput | Prisma.TradeOrderOrderByWithRelationInput[];
    cursor?: Prisma.TradeOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TradeOrderCountAggregateInputType;
    _avg?: TradeOrderAvgAggregateInputType;
    _sum?: TradeOrderSumAggregateInputType;
    _min?: TradeOrderMinAggregateInputType;
    _max?: TradeOrderMaxAggregateInputType;
};
export type GetTradeOrderAggregateType<T extends TradeOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateTradeOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTradeOrder[P]> : Prisma.GetScalarType<T[P], AggregateTradeOrder[P]>;
};
export type TradeOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TradeOrderWhereInput;
    orderBy?: Prisma.TradeOrderOrderByWithAggregationInput | Prisma.TradeOrderOrderByWithAggregationInput[];
    by: Prisma.TradeOrderScalarFieldEnum[] | Prisma.TradeOrderScalarFieldEnum;
    having?: Prisma.TradeOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TradeOrderCountAggregateInputType | true;
    _avg?: TradeOrderAvgAggregateInputType;
    _sum?: TradeOrderSumAggregateInputType;
    _min?: TradeOrderMinAggregateInputType;
    _max?: TradeOrderMaxAggregateInputType;
};
export type TradeOrderGroupByOutputType = {
    id: string;
    side: string;
    type: string;
    amount: runtime.Decimal;
    price: runtime.Decimal;
    status: string;
    pair: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TradeOrderCountAggregateOutputType | null;
    _avg: TradeOrderAvgAggregateOutputType | null;
    _sum: TradeOrderSumAggregateOutputType | null;
    _min: TradeOrderMinAggregateOutputType | null;
    _max: TradeOrderMaxAggregateOutputType | null;
};
type GetTradeOrderGroupByPayload<T extends TradeOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TradeOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TradeOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TradeOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TradeOrderGroupByOutputType[P]>;
}>>;
export type TradeOrderWhereInput = {
    AND?: Prisma.TradeOrderWhereInput | Prisma.TradeOrderWhereInput[];
    OR?: Prisma.TradeOrderWhereInput[];
    NOT?: Prisma.TradeOrderWhereInput | Prisma.TradeOrderWhereInput[];
    id?: Prisma.StringFilter<"TradeOrder"> | string;
    side?: Prisma.StringFilter<"TradeOrder"> | string;
    type?: Prisma.StringFilter<"TradeOrder"> | string;
    amount?: Prisma.DecimalFilter<"TradeOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFilter<"TradeOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"TradeOrder"> | string;
    pair?: Prisma.StringFilter<"TradeOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"TradeOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TradeOrder"> | Date | string;
};
export type TradeOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    side?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pair?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TradeOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TradeOrderWhereInput | Prisma.TradeOrderWhereInput[];
    OR?: Prisma.TradeOrderWhereInput[];
    NOT?: Prisma.TradeOrderWhereInput | Prisma.TradeOrderWhereInput[];
    side?: Prisma.StringFilter<"TradeOrder"> | string;
    type?: Prisma.StringFilter<"TradeOrder"> | string;
    amount?: Prisma.DecimalFilter<"TradeOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFilter<"TradeOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"TradeOrder"> | string;
    pair?: Prisma.StringFilter<"TradeOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"TradeOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TradeOrder"> | Date | string;
}, "id">;
export type TradeOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    side?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pair?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TradeOrderCountOrderByAggregateInput;
    _avg?: Prisma.TradeOrderAvgOrderByAggregateInput;
    _max?: Prisma.TradeOrderMaxOrderByAggregateInput;
    _min?: Prisma.TradeOrderMinOrderByAggregateInput;
    _sum?: Prisma.TradeOrderSumOrderByAggregateInput;
};
export type TradeOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.TradeOrderScalarWhereWithAggregatesInput | Prisma.TradeOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.TradeOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TradeOrderScalarWhereWithAggregatesInput | Prisma.TradeOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TradeOrder"> | string;
    side?: Prisma.StringWithAggregatesFilter<"TradeOrder"> | string;
    type?: Prisma.StringWithAggregatesFilter<"TradeOrder"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"TradeOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalWithAggregatesFilter<"TradeOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringWithAggregatesFilter<"TradeOrder"> | string;
    pair?: Prisma.StringWithAggregatesFilter<"TradeOrder"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TradeOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TradeOrder"> | Date | string;
};
export type TradeOrderCreateInput = {
    id?: string;
    side: string;
    type: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: string;
    pair: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TradeOrderUncheckedCreateInput = {
    id?: string;
    side: string;
    type: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: string;
    pair: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TradeOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    side?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pair?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TradeOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    side?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pair?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TradeOrderCreateManyInput = {
    id?: string;
    side: string;
    type: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: string;
    pair: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TradeOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    side?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pair?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TradeOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    side?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pair?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TradeOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    side?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pair?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TradeOrderAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type TradeOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    side?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pair?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TradeOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    side?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pair?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TradeOrderSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type TradeOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    side?: boolean;
    type?: boolean;
    amount?: boolean;
    price?: boolean;
    status?: boolean;
    pair?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tradeOrder"]>;
export type TradeOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    side?: boolean;
    type?: boolean;
    amount?: boolean;
    price?: boolean;
    status?: boolean;
    pair?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tradeOrder"]>;
export type TradeOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    side?: boolean;
    type?: boolean;
    amount?: boolean;
    price?: boolean;
    status?: boolean;
    pair?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tradeOrder"]>;
export type TradeOrderSelectScalar = {
    id?: boolean;
    side?: boolean;
    type?: boolean;
    amount?: boolean;
    price?: boolean;
    status?: boolean;
    pair?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TradeOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "side" | "type" | "amount" | "price" | "status" | "pair" | "createdAt" | "updatedAt", ExtArgs["result"]["tradeOrder"]>;
export type $TradeOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TradeOrder";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        side: string;
        type: string;
        amount: runtime.Decimal;
        price: runtime.Decimal;
        status: string;
        pair: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tradeOrder"]>;
    composites: {};
};
export type TradeOrderGetPayload<S extends boolean | null | undefined | TradeOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload, S>;
export type TradeOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TradeOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TradeOrderCountAggregateInputType | true;
};
export interface TradeOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TradeOrder'];
        meta: {
            name: 'TradeOrder';
        };
    };
    findUnique<T extends TradeOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, TradeOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TradeOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TradeOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TradeOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, TradeOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TradeOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TradeOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TradeOrderFindManyArgs>(args?: Prisma.SelectSubset<T, TradeOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TradeOrderCreateArgs>(args: Prisma.SelectSubset<T, TradeOrderCreateArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TradeOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, TradeOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TradeOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TradeOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TradeOrderDeleteArgs>(args: Prisma.SelectSubset<T, TradeOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TradeOrderUpdateArgs>(args: Prisma.SelectSubset<T, TradeOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TradeOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, TradeOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TradeOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, TradeOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TradeOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TradeOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TradeOrderUpsertArgs>(args: Prisma.SelectSubset<T, TradeOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__TradeOrderClient<runtime.Types.Result.GetResult<Prisma.$TradeOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TradeOrderCountArgs>(args?: Prisma.Subset<T, TradeOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TradeOrderCountAggregateOutputType> : number>;
    aggregate<T extends TradeOrderAggregateArgs>(args: Prisma.Subset<T, TradeOrderAggregateArgs>): Prisma.PrismaPromise<GetTradeOrderAggregateType<T>>;
    groupBy<T extends TradeOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TradeOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: TradeOrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TradeOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TradeOrderFieldRefs;
}
export interface Prisma__TradeOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TradeOrderFieldRefs {
    readonly id: Prisma.FieldRef<"TradeOrder", 'String'>;
    readonly side: Prisma.FieldRef<"TradeOrder", 'String'>;
    readonly type: Prisma.FieldRef<"TradeOrder", 'String'>;
    readonly amount: Prisma.FieldRef<"TradeOrder", 'Decimal'>;
    readonly price: Prisma.FieldRef<"TradeOrder", 'Decimal'>;
    readonly status: Prisma.FieldRef<"TradeOrder", 'String'>;
    readonly pair: Prisma.FieldRef<"TradeOrder", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TradeOrder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TradeOrder", 'DateTime'>;
}
export type TradeOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where: Prisma.TradeOrderWhereUniqueInput;
};
export type TradeOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where: Prisma.TradeOrderWhereUniqueInput;
};
export type TradeOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where?: Prisma.TradeOrderWhereInput;
    orderBy?: Prisma.TradeOrderOrderByWithRelationInput | Prisma.TradeOrderOrderByWithRelationInput[];
    cursor?: Prisma.TradeOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TradeOrderScalarFieldEnum | Prisma.TradeOrderScalarFieldEnum[];
};
export type TradeOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where?: Prisma.TradeOrderWhereInput;
    orderBy?: Prisma.TradeOrderOrderByWithRelationInput | Prisma.TradeOrderOrderByWithRelationInput[];
    cursor?: Prisma.TradeOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TradeOrderScalarFieldEnum | Prisma.TradeOrderScalarFieldEnum[];
};
export type TradeOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where?: Prisma.TradeOrderWhereInput;
    orderBy?: Prisma.TradeOrderOrderByWithRelationInput | Prisma.TradeOrderOrderByWithRelationInput[];
    cursor?: Prisma.TradeOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TradeOrderScalarFieldEnum | Prisma.TradeOrderScalarFieldEnum[];
};
export type TradeOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TradeOrderCreateInput, Prisma.TradeOrderUncheckedCreateInput>;
};
export type TradeOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TradeOrderCreateManyInput | Prisma.TradeOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TradeOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    data: Prisma.TradeOrderCreateManyInput | Prisma.TradeOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TradeOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TradeOrderUpdateInput, Prisma.TradeOrderUncheckedUpdateInput>;
    where: Prisma.TradeOrderWhereUniqueInput;
};
export type TradeOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TradeOrderUpdateManyMutationInput, Prisma.TradeOrderUncheckedUpdateManyInput>;
    where?: Prisma.TradeOrderWhereInput;
    limit?: number;
};
export type TradeOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TradeOrderUpdateManyMutationInput, Prisma.TradeOrderUncheckedUpdateManyInput>;
    where?: Prisma.TradeOrderWhereInput;
    limit?: number;
};
export type TradeOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where: Prisma.TradeOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.TradeOrderCreateInput, Prisma.TradeOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TradeOrderUpdateInput, Prisma.TradeOrderUncheckedUpdateInput>;
};
export type TradeOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
    where: Prisma.TradeOrderWhereUniqueInput;
};
export type TradeOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TradeOrderWhereInput;
    limit?: number;
};
export type TradeOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TradeOrderSelect<ExtArgs> | null;
    omit?: Prisma.TradeOrderOmit<ExtArgs> | null;
};
export {};
