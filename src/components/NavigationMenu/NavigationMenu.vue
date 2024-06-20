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

    <div class="container flex justify-between items-center my-auto py-2">
      <div>
        <img :src="interfyWide" class="w-36" alt="Interfy Wide Logo">
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem class="self-center place-items-center justify-items-center">
            <NavigationMenuTrigger class="bg-transparent text-foreground data-[state=open]:underline data-[active]:underline">Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[300px] ">
                <NavigationMenuLink href="/docs" title="About Us">
                  Australian-based company.
                </NavigationMenuLink>
                <NavigationMenuLink href="/docs/installation" title="Contact Us">
                  Anytime.
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-foreground">Products</NavigationMenuTrigger>
            <NavigationMenuContent
              class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <li class="row-span-3">
                  <NavigationMenuLink as-child>
                    <a class="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-br from-primary via-foreground to-black text-white p-6 no-underline outline-none focus:shadow-md"
                      href="/">
                      <img src="https://companieslogo.com/img/orig/PCOR-33258035.png?t=1652256743" class="h-16 w-12">
                      <div class="mb-2 mt-4 text-lg font-medium">
                        Procore
                      </div>
                      <p class="text-sm leading-tight text-b">
                        Financial Integrations
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <NavigationMenuLink v-for="component in components" :key="component.title" 
                  :href="component.href">
                  <a
                    v-bind="$attrs"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground "
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ component.title }}
                    </div>
                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </ul>

            </NavigationMenuContent>

          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Demo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle class="text-2xl">Book a demo.</DialogTitle>
              <DialogDescription>
                Assisted by Construction Professionals.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className=" w-full flex  items-center gap-2">
                <div class="w-1/2">
                  <Label for="fname">First Name</Label>
                  <Input id="name" type="text" placeholder="First Name" required />
                </div>
                <div class="w-1/2">
                  <Label for="lname">Last Name</Label>
                  <Input id="name" type="text" placeholder="Last Name" required />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full grid items-center gap-2">
                <Label for="company">Company</Label>
                <Input id="company" type="text" placeholder="Company" required />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full grid items-center gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-full grid items-center gap-2">
                <Label for="phone">Phone</Label>
                <Input id="phone" type="number" placeholder="Phone" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div class="w-full grid items-center gap-2">
                <Label for="email">Appointment Date</Label>
                <Popover>
                  <PopoverTrigger as-child>
                    <Button :variant="'outline'" :class="cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground',
                    )">
                      <CalendarIcon class="mr-2 h-4 w-4" />
                      <span>{{ date ? format(date, 'PPP - hh:mm') : "Pick a date" }}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-auto p-0">
                    <Calendar v-model="date" mode="datetime" />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div class="w-full grid items-center gap-2">
                <Label for="message">Additional Details</Label>
                <Textarea id="message" placeholder="Enter your additional detail you would like us to know." />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" class="mr-2">
                  Submit
                </Button>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <!-- <Button>Demo</Button> -->
      </div>
    </div>
    <Separator />
  </div>
</template>

