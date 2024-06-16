import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function withPrivateRoute(WrappedComponent: any, options?: { router: any }) {
    return function PrivateRouteComponent(props: any) {
        const router = options?.router || useRouter();
        const { data: session, status } = useSession();

        if (status === 'loading') {
            return <div>Loading...</div>;
        }

        if (status === 'unauthenticated') {
            router.push('/signin');
            return null;
        }

        return <WrappedComponent {...props} />;
    };
}