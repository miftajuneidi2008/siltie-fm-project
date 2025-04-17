import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { db } from '@/lib/prisma';
import Image from 'next/image';

const ListofProgram = async() => {
    const programs = await db.postCategory.findMany();
  return !programs ? (
    <p>ምንም ዳታ የለም </p>
  ) : (
    <Table className='w-full md:w-[90%] mx-auto'>
      <TableCaption>የፕሮግራም ይዘት ዝርዝር.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ምስል</TableHead>
          <TableHead>ርዕስ</TableHead>
     
          <TableHead className="text-right">ተግባር</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {programs.map((program) => (
          <TableRow key={program.id}>
            <TableCell className="font-medium">
                <Image src={`/api/image?path=${encodeURIComponent(program.image)}`} width={40} height={40} alt={program.title} />
            </TableCell>
            <TableCell>{program.title}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>አሻሽል</DropdownMenuItem>
                  <DropdownMenuItem>አጥፉ</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ListofProgram