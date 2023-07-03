import useAuth from '../composition/useAuth.js';
import {auth, db} from './firebase.js'
import { collection, addDoc, query, getDocs, where, doc, updateDoc } from 'firebase/firestore';

export async function purchaseService(serviceId, total, userId) {
    try {
  
      const compraData = {
        userId: userId,
        serviceId: serviceId,
        total: total,
        estado: 'pending', 
        fecha: new Date().toLocaleString('es-AR', {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit'})
      };

      console.log('compraData', compraData)
      
      const compraRef = await addDoc(collection(db, 'compras'), compraData);
      console.log('Order created with ID:', compraRef.id);
  
    } catch (error) {
      console.error(error);
    }
  }

export async function getComprasById (userId) {
    try {
        const comprasRef = collection(db, 'compras');
        const q = query(comprasRef, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        const compras = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        });
        return compras;
    } catch (error) {
        console.error(error);
    }
}

export async function cambiarEstadoCompra (compraId, estado) {
    try {
        const compraRef = doc(db, 'compras', compraId);
        await updateDoc(compraRef, {
            estado: estado,
        });
    } catch (error) {
        console.error(error);
    }
}

