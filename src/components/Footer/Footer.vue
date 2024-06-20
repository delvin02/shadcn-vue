<script setup lang="ts">
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'OnecoreQBO',
    href: '/docs/primitives/alert-dialog',
    description:
      'Procore x QuickBooks.',
  },
  {
    title: 'OnecoreMYOB',
    href: '/docs/primitives/hover-card',
    description:
      'Procore x MYOB.',
  },
  {
    title: 'OnecoreXero',
    href: '/docs/primitives/progress',
    description:
      'Procore x Xero.',
  },
  {
    title: 'OnecoreOdoo',
    href: '/docs/primitives/scroll-area',
    description: 'Procore x Odoo.',
  },
]


import { ref, onMounted } from 'vue'
import type { Payment } from '@/components/payments/columns'
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from '@/components/ui/textarea'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import interfyWide  from '@/assets/interfy-wide.png'

const date = ref<Date>()

const data = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return generateDummyData(100)
}

function generateDummyData(count: number): Payment[] {
  const dummyData: Payment[] = [];

  for (let i = 0; i < count; i++) {
    const dataItem: Payment = {
      id: generateUniqueId(),
      amount: Math.floor(Math.random() * 1000) + 1,
      status: getRandomStatus(),
      email: `user${i}@example.com`,
    };

    dummyData.push(dataItem);
  }

  return dummyData;
}

function generateUniqueId(): string {
  // Implement your unique ID generation logic
  // This is a simple example; in a real scenario, you might want to use a library or more sophisticated approach
  return Math.random().toString(36).substr(2, 9);
}

function getRandomStatus(): 'pending' | 'processing' | 'success' | 'failed' {
  const statuses: Array<'pending' | 'processing' | 'success' | 'failed'> = ['pending', 'processing', 'success', 'failed'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

onMounted(async () => {
  data.value = await getData();
});
</script>
<template>
  <div>
    <Separator/>
    <div class="container flex flex-col justify-between">
      <div class="grid grid-cols-4 justify-between gap-6 my-12 py-2">
        <div class="col-span-2 flex flex-col">
          <img :src="interfyWide" class="w-36" alt="Interfy Wide Logo">
          <p>Founded in 2018 after releasing our flagship Procore – Xero integration, Interfy now supports integration with MYOB and offers custom solutions for other financial systems. Interfy looks to simplify the integration process between construction and financials.</p>
        </div>
        <div>
          <h1 class="text-xl font-semibold">Quicklinks </h1>
          <div class="flex flex-col mt-4">
            <a href="#" class="text-foreground">OneCore Xero</a>
            <a href="#" class="text-foreground">OneCore QBO</a>
            <a href="#" class="text-foreground">OneCore MYOB</a>
            <a href="#" class="text-foreground">OneCore Odoo</a>

          </div>
        </div>
        <div>
          <h1 class="text-xl font-semibold">Contact Us </h1>
          <div class="flex flex-col mt-4">
            <a href="#" class="text-foreground">+61 87079 1055o</a>
            <a href="#" class="text-foreground">hello@interfy.com.au</a>
            <a href="#" class="text-foreground">Level 2, 139 Frome St, Adelaide SA 5000
</a>
          </div>
        </div>
      </div>
      <Separator/>

      <div>
        <p class="text-center py-2">© 2024 Interfy Pty Ltd | All rights reserved | ABN 37 628 193 466 | Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

