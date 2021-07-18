interface ITemplateVariables{
  [keys:string]: string | number;
}
export default interface seEmailTemplateDTO{
  file:string;
  variables:ITemplateVariables;
}
