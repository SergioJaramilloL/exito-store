import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.types';

const initialState = {
  products: [],
  total: 0,
  totalProducts: 0,
}

function CartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      const exist = state.products.find((product: any) => product.id === action.payload.id);
      if (!exist) {
        const newProduct = {
          ...action.payload,
          quantity: 1, 
        }

        return {
          ...state,
          products: [...state.products, newProduct],
          total: state.total + action.payload.price,
          totalProducts: state.totalProducts + 1,
        }
      } else {
        const newProducts = state.products.map((product: any) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          } else {
            return product;
          }
        });

        return {
          ...state,
          products: newProducts,
          total: state.total + action.payload.price,
          totalProducts: state.totalProducts + 1,
        }
      }
  
    case REMOVE_PRODUCT:
      const productToRemove = state.products.find((product: any) => product.id === action.payload.id) as any;
      if (productToRemove.quantity === 1) {
        const newProducts = state.products.filter((product: any) => product.id !== action.payload.id);

        return {
          ...state,
          products: newProducts,
          total: state.total - action.payload.price,
          totalProducts: state.totalProducts - 1,
        }
      } else {
        const newProducts = state.products.map((product: any) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          } else {
            return product;
          }
        });

        return {
          ...state,
          products: newProducts,
          total: state.total - action.payload.price,
          totalProducts: state.totalProducts - 1,
        }
      }

    default:
      return state;
  }
}

export default CartReducer;
