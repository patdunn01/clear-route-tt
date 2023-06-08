const fs = require("fs");

function getCustomers() {
  // Read the .txt file

  fs.readFile("latest-customers.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Create an array of arrays of customers

    const customers = data.split("\n");
    const customerArray = customers.map((customer) => customer.split(","));

    // Find customers 40 or older or 59 and younger

    const customersToBeContacted = customerArray
      .filter((customer) => customer[1] >= 40 && customer[1] <= 59)
      .map((customer) => customer.slice(0, 1).concat(customer.slice(3, 5)))
      .map((customer) => customer.join(","));

    // Create content (a string) to be added to the new .txt file

    let content = "name,phone,email\n";
    customersToBeContacted.forEach((profile) => {
      content += profile.toString() + "\n";
    });

    // Create new .txt with the selected customer's profiles

    fs.writeFile("customers-to-be-contacted.txt", content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File created successfully.");
    });
  });
}

getCustomers();
