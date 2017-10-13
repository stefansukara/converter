/*
 convertor valuta u BAM
 Euro to BAM / 1.96
 USD to BAM  / 1.65
 RSD to BAM  / 0.016
 RUB to Bam  / 0.029
 */
 
 var a, b=[],c=[];
 function converter(x,y,z){


 switch (y){
                    case "USD": switch (z){case "BAM": console.log("Your price in BAM is : " + x * 1.65);break; 
                                           case "RSD": console.log("Your price in RSD is : " + x * 100.81); break;
                                           case "Euro": console.log("Your price in Euro is : " + x * 0.84); break;
                                                
                                        }
                                        break;
                    case "BAM": switch (z){case "USD": console.log("Your price in USD is : " + x * 0.61);break; 
                                           case "RSD": console.log("Your price in RSD is : " + x * 61); break;
                                           case "Euro": console.log("Your price in Euro is : " + x * 0.51); break;
                                                }
                                break;
                    case "RSD": switch (z){case "BAM": console.log("Your price in BAM is : " + x * 0.016);break; 
                                           case "USD": console.log("Your price in USD is : " + x * 0.0099); break;
                                           case "Euro": console.log("Your price in Euro is : " + x * 0.0084); break;
                                                }
                                                break;
                    case "Euro": switch (z){case "BAM": console.log("Your price in BAM is : " + x * 1.96);break; 
                                           case "RSD": console.log("Your price in RSD is : " + x * 119.32); break;
                                           case "USD": console.log("Your price in USD is : " + x * 1.18); break;
                                                }               
                                            }
                                            
                        }
converter(500, "USD", "BAM");
converter(100, "Euro", "RSD");
converter(800, "BAM","Euro" );
converter(1800, "RSD","USD" );