import { create } from 'zustand';
import axios from '../lib/axios';
import { toast } from "react-hot-toast";

export const useUserStore = create((get, set) => ({
    user: null,
    loading: false,
    checkingAuth: true,
    
    signup: async () => {}
}))