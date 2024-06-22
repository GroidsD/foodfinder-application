"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./auth-element.module.css"
import Button from "./button";
import Link from "next/link";

function AuthElement(): JSX.Element {
    const { data: session, status } = useSession();
    return (
        <>

            <nav className={styles.root}>

                {status === "authenticated" && (
                    <span className={styles.name}>
                        Hi <b>{session?.user?.name}</b>
                    </span>
                )
                }
                {status === "authenticated" && (
                    <>
                        {/* <Button variant="outline">
                            <Link
                                href={`/list/${session?.user.fdlst_private_userId}`}
                            >
                                Your wish list
                            </Link>
                        </Button> */}
                        <Button variant="blue" clickHandler={() => signOut()}>
                            Sign out
                        </Button>
                    </>
                )}
                {status == "unauthenticated" && (
                    <>
                        <Button variant="blue" clickHandler={() => signIn()}>
                            Sign in
                        </Button>
                    </>
                )}
            </nav>
        </>
    );
};

export default AuthElement;
