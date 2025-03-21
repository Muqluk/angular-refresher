

export class ErrorAggregator {



  add(formError: FormError) {

  }

}

export type FormError = {
  formView: string;
  formField: string;
  message: string;
}
