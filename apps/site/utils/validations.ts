type FormType = 'booking' | 'travel'

const forms: Record<FormType, Record<string, string>> = {
  booking: {
    travel_id: 'Travel',
    customer_first_name: 'First name',
    customer_last_name: 'Last name',
    customer_email: 'Email address',
    customer_phone: 'Phone number',
    customer_age: 'Age',
    customer_gender: 'Gender',
    payment_method: 'Payment method',
    internal_notes: 'Internal notes'
  },
  travel: {
    name: 'Name',
    start_date: 'Start date',
    end_date: 'End date',
    picture: 'Picture',
    description: 'Description',
    price_per_person: 'Price per person',
    average_rating: 'Average rating'
  }
}

export const formatValidationError = (message: string, formType: FormType) => {
  const field = message.split(' ')[0]

  return message.replace(field, forms[formType][field])
}
