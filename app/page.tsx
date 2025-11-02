// 앱 접속 시 /pages/landing으로 redirect 기능만 수행함 

import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/landing');
}
