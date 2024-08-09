import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface Order {
    id: number;
    assemblerName: string;
    masterName: string;
    workshop: string;
    anotherParam: string;
    orderNumber: string;
    completed: boolean;
}

interface OrdersState {
    orders: Order[];
}

const initialState: OrdersState = {
    orders: [],
};


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload);
        },
        markOrderAsCompleted: (state, action: PayloadAction<number>) => {
            const order = state.orders.find(order => order.id === action.payload);
            if (order) {
                order.completed = true;
            }
        },
        deleteOrder: (state, action: PayloadAction<number>) => {
            state.orders = state.orders.filter(order => order.id !== action.payload);
        },
    },
});


export const { addOrder, markOrderAsCompleted, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;