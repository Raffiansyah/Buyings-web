import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useUpdateAddress } from '~/service/mutation';
import { UpdateAddressSchema } from '~/service/validator/updateAddress-Form';
import { Card, CardContent } from '../ui/card';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { addressData } from '~/utils/type';

type propTypes = {
  Address: addressData | null;
};

export default function AddressSetting(props: propTypes) {
  const { Address } = props;
  const { mutateAsync: UpdateAddressMutation, isPending } = useUpdateAddress();

  const form = useForm<z.infer<typeof UpdateAddressSchema>>({
    resolver: zodResolver(UpdateAddressSchema),
    defaultValues: {
      street: '',
      province: '',
      city: '',
      country: '',
      postalCode: '',
    },
  });

  async function handleUpdateAddress(
    values: z.infer<typeof UpdateAddressSchema>
  ) {
    UpdateAddressMutation({
      data: {
        street: values.street,
        province: values.province,
        city: values.city,
        country: values.country,
        postalCode: values.postalCode,
      },
      id: String(Address?.id),
    });
  }

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <h1 className="text-green-800 text-lg mb-3">Address Setting</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdateAddress)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={Address?.street}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Province</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={Address?.province}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder={Address?.city} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={Address?.country}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PostalCode</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={Address?.postalCode}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-green-800 text-primary-foreground"
            >
              {isPending ? 'Loading' : 'Save'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
