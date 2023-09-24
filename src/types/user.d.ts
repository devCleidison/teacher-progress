declare type IUser = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  type: 'admin' | 'school';
  teachers?: [];
}