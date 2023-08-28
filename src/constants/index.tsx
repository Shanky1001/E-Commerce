export const adminNavOptions = [
	{
		id: "adminListing",
		label: "Manage All Products",
		path: "/admin/all-products",
	},
	{
		id: "adminNewProduct",
		label: "Add New Product",
		path: "/admin/add-product",
	},
];

export const clientNavOptions = [
	{
		id: "home",
		label: "Home",
		path: "/",
	},
	{
		id: "listing",
		label: "All Products",
		path: "/product/listing/all-products",
	},
	{
		id: "listingMen",
		label: "Men",
		path: "/product/listing/men",
	},
	{
		id: "listingWomen",
		label: "Women",
		path: "/product/listing/women",
	},
	{
		id: "listingKids",
		label: "kids",
		path: "/product/listing/kids",
	},
];

export const registrationForm = [
	{
	  id: "name",
	  type: "text",
	  placeholder: "Enter your name",
	  label: "Name",
	  componentType: "input",
	},
	{
	  id: "email",
	  type: "email",
	  placeholder: "Enter your email",
	  label: "Email",
	  componentType: "input",
	},
	{
	  id: "password",
	  type: "password",
	  placeholder: "Enter your password",
	  label: "Password",
	  componentType: "input",
	},
	{
	  id: "role",
	  type: "",
	  placeholder: "",
	  label: "Role",
	  componentType: "select",
	  options: [
		{
		  id: "admin",
		  label: "Admin",
		},
		{
		  id: "customer",
		  label: "customer",
		},
	  ],
	},
  ];
  
  export const loginForm = [
	{
	  id: "email",
	  type: "email",
	  placeholder: "Enter your email",
	  label: "Email",
	  componentType: "input",
	},
	{
	  id: "password",
	  type: "password",
	  placeholder: "Enter your password",
	  label: "Password",
	  componentType: "input",
	},
  ];