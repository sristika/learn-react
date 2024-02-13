// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
// import Profile from './components/profile';
// import ProfileMistake from './qcomps/profile_mistake';
// import MyComp from './qcomps/firstcomp';
// import TodoList from './qcomps/todos';
import PackingList from './qcomps/props_item';

export default function Home() {
  return (
    <div className={styles.main}>
      <PackingList />
    </div>
  );
}
