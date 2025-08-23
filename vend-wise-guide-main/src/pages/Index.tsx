import { StepCard } from "@/components/StepCard";
import vendingMachineImage from "@/assets/vending-machine.jpg";
import insertMoneyImage from "@/assets/insert-money.jpg";
import selectItemImage from "@/assets/select-item.jpg";
import retrieveItemImage from "@/assets/retrieve-item.jpg";

const Index = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Select Visually the Item of Choice",
      description: "Scan through the different snacks and check whether there is something that might satisfy your cravings. The type of products that you can buy vary from machine to machine; however, most of them include some kind of chips, chocolates, cookies, and gums. Some machines offer healthy snacks such as baked chips, granola bars, and peanuts.",
      image: selectItemImage,
      imageAlt: "Person selecting an item from a vending machine",
      tips: [
        "Check the expiration date by looking at the product packaging if visible",
        "Ensure the item is properly positioned and will dispense correctly",
        "Look for the item code (usually a letter-number combination) displayed on the selection button"
      ]
    },
    {
      stepNumber: 2,
      title: "Insert Payment Method",
      description: "Most modern vending machines accept various payment methods including cash (bills and coins), credit/debit cards, and contactless payments like mobile wallets. Check what payment options are available on your specific machine before making your selection.",
      image: insertMoneyImage,
      imageAlt: "Hands inserting coins into a vending machine",
      tips: [
        "Smooth out wrinkled bills before inserting them",
        "Insert coins one at a time to avoid jams",
        "For card payments, look for the card reader slot or contactless symbol",
        "Keep your receipt if the machine provides one"
      ]
    },
    {
      stepNumber: 3,
      title: "Enter the Item Code",
      description: "After inserting your payment, enter the code corresponding to your selected item using the keypad. The code is typically displayed next to or below each item. Press the buttons carefully and confirm your selection if prompted by the machine.",
      image: selectItemImage,
      imageAlt: "Close-up of vending machine keypad with item codes",
      tips: [
        "Double-check the code before confirming your selection",
        "Press the buttons firmly but gently",
        "Wait for the machine to process your selection before pressing additional buttons",
        "Some machines require you to press an 'Enter' or 'Confirm' button after entering the code"
      ]
    },
    {
      stepNumber: 4,
      title: "Retrieve Your Item and Change",
      description: "Once the machine processes your payment and selection, your item will be dispensed into the pickup slot at the bottom of the machine. Don't forget to collect any change that may be dispensed into the coin return slot.",
      image: retrieveItemImage,
      imageAlt: "Hand retrieving item from vending machine dispenser",
      tips: [
        "Wait for the item to completely drop before reaching into the slot",
        "Check the coin return slot for any change",
        "If your item gets stuck, don't shake the machine - contact the service number instead",
        "Take your receipt if you need it for expense tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How to Buy from a Vending Machine
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive step-by-step guide to successfully purchasing items from vending machines
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="container mx-auto px-6 -mt-12 mb-16">
        <div className="bg-card rounded-lg shadow-card overflow-hidden">
          <img 
            src={vendingMachineImage} 
            alt="Modern vending machine with various snacks and drinks"
            className="w-full h-96 object-cover"
          />
        </div>
      </section>


      {/* Steps */}
      <main className="container mx-auto px-6 pb-16">
        <div className="space-y-12">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Troubleshooting Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h4 className="font-semibold text-primary mb-2">Item Stuck?</h4>
              <p className="text-muted-foreground">
                Contact the service number on the machine. Never shake or hit the machine.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h4 className="font-semibold text-primary mb-2">Payment Issues?</h4>
              <p className="text-muted-foreground">
                Try a different payment method or check if the machine accepts your card type.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h4 className="font-semibold text-primary mb-2">Wrong Item?</h4>
              <p className="text-muted-foreground">
                Note the machine location and contact customer service for a refund.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;