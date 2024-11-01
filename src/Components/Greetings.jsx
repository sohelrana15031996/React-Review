const Greetings = ({ employee }) => {
  const { employeeName, profitShare} = employee
  return (
    <div>
      <p className="border-2 p-4 m-4 border-rose-400 rounded-xl text-justify bg-[url('./assets/Arup_Hero_placement-5.jpg')] bg-cover bg-center h-screen ">
        Dear <span className="font-bold">{employeeName}</span>,<br />

        I hope this message finds you well. I am reaching out to inform you of your individual profit share for the year ending  30th of September. We appreciate your hard work and dedication, which contributed significantly to this result. Your Profit Share Amount: <span className="font-bold"> {profitShare}</span>. This amount will be processed and transferred to your account by 15th of November. <br />
        <br />

        If you have any questions about the calculation or distribution, please feel free to reach out to me directly. <br />
        <br />

        Thank you once again for your valuable contribution, and let’s continue striving towards even greater success together. <br />
        <br />

        Best regards,<br />
        ARUP's trusty team
      </p>
    </div>
  );
};

export default Greetings;