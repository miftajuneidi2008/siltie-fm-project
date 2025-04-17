import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { db } from '@/lib/prisma';
import Image from 'next/image';
const ListofPopularNews = async() => {
    const news = await db.news.findMany({
      orderBy: {
        viewed: "desc",
      },
      take:5
    });
  return !news ? (
    <p>ምንም ዳታ የለም </p>
  ) : (
    <Card>
      <CardHeader>
        <CardTitle>ብዙ የታዩ ዜናዎች</CardTitle>
        <CardDescription>ብዙህ እይታ ጋገኙ ዜናዎች ዝርዝር</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ምስል</TableHead>
              <TableHead>ርዕስ</TableHead>
              <TableHead>ምድብ</TableHead>
              <TableHead className="text-right">መጠን</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((news) => (
              <TableRow key={news.id}>
                <TableCell className="font-medium">
                  <Image
                    src={`/api/image?path=${encodeURIComponent(news.image)}`}
                    width={40}
                    height={40}
                    alt={news.title}
                  />
                </TableCell>
                <TableCell>{news.title}</TableCell>
                <TableCell>{news.categoryTitle}</TableCell>
                <TableCell className="text-right">{news.viewed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ListofPopularNews