// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const router = useRouter();
    
//     useEffect(() => {
//       const token = localStorage.getItem('logintoken');  
//       if (!token) {
//         router.push('/'); 
//       }
//     }, []);
    
//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;


import { useRouter } from 'next/navigation';
import { useEffect, ComponentType } from 'react';

interface WithAuthProps {
  [key: string]: any; 
}

const withAuth = <P extends WithAuthProps>(WrappedComponent: ComponentType<P>) => {
  const HOC = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('loginToken');  
      if (!token) {
        router.push('/');  
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
