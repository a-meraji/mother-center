"use client"
import pb from '@/libs/pocketbase';
import { userFetched } from '@/redux/ducks/transactions';
import { setUser } from '@/redux/ducks/userSlice';
import { useEffect } from 'react'
import { useDispatch} from 'react-redux';

function StateGraber() {
    const dispatch = useDispatch();  
    useEffect(() => {
      if (pb.authStore.isValid) {
        const { id, name, phone, email, subscribeDate, unlimite, role } =
          pb.authStore.model;
        dispatch(setUser({ id, name, phone, email, subscribeDate, unlimite, role }));
        dispatch(userFetched({id}))
      }
    }, []);
    
  return null
}

export default StateGraber