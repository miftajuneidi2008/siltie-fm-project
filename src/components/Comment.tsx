import Image from "next/image";
import React from "react";
import i1 from "@/assets/images/p4.png";
import { auth, signIn } from "@/lib/auth";
import GoogleLoginButton from "./GoogleLoginButton";
import CommentForm from "./CommentForm";
import { db } from "@/lib/prisma";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "./ui/button";
import { EllipsisVerticalIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import EditCommentForm from "./EditComment";
import { deleteComment } from "@/app/action/action";

const Comment = async ({ newsId, type }: { newsId: string; type?: string }) => {
  const session = await auth();
  let userId = null;
  if (session?.user) {
    const userInfo = await db.user.findUnique({
      where: { email: session?.user?.email as string },
    });
    userId = userInfo?.id;
  }

  const comment = await db.comment.findMany({
    where: {
      newsId: newsId,
    },
    include: {
      user: true,
    },
  });
  let commentForEdit = null;
  if (comment && type) {
    commentForEdit = comment.find((comment) => comment.id === type);
  }

  return (
    <div className="my-2 flex flex-col gap-2">
      {session?.user ? (
        !type ? (
          <CommentForm id={newsId} />
        ) : (
          <EditCommentForm
            id={newsId}
            commentId={commentForEdit?.id as string}
            content={commentForEdit?.content as string}
            userEmail={commentForEdit?.user.email as string}
          />
        )
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: `/post/${newsId}` });
          }}
        >
          <GoogleLoginButton name="Login to Comment" size="small" />
        </form>
      )}

      {!comment ? null : (
        <div className="my-2 flex flex-col gap-2">
          {comment.map((comment) => {
            const deleteComments = deleteComment.bind(null,comment.id as string,newsId as string)
            return (
              <div
                className="flex gap-2 relative items-center "
                key={comment.id}
              >
                <Image
                  src={comment.user?.image}
                  width={50}
                  height={50}
                  alt="logo"
                  className="h-12 w-12 rounded-full"
                />
                <p className="w-[80%] text-[14px] text-slate-600">
                  {comment.content}
                </p>
                {userId === comment.userId || session?.user.isAdmin ? (
                  <div className="flex gap-2 absolute top-0 right-0">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <EllipsisVerticalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                          <Link href={`/post/${newsId}?type=${comment.id}`}>
                            አሻሽል
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                className="border-none text-destructive hover:bg-white hover:text-destructive dark:hover:bg-black px-2"
                              >
                                ኣጥፋ
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  ሙሉ በሙሉ እርግጠኛ ነህ?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  ይህ ድርጊት ዎደኋላ አይመለስም።
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>ተወው</AlertDialogCancel>
                                <AlertDialogAction asChild>
                                  <form action={deleteComments}>
                                    <Button type="submit">ቀጥል</Button>
                                  </form>
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
