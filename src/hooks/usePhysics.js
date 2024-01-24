import create from 'zustand';
import { useBox } from '@react-three/cannon';

export const usePhysics = create((set) => ({
  physicsObjects: {}, // Store to hold physics objects
  mass: 0,
  useBox: (mass = 1, position = [0, 5, 0], args = [1, 2, 1]) => set((state) => ({ mass: mass }))

}))