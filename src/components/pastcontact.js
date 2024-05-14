<form action="" method="" className="flex-between">
  <input
    type="text"
    placeholder="First Name"
    className="half name"
    required=""
  />
  <input
    type="text"
    placeholder="Last Name"
    className="half name"
    required=""
  />
  <input type="email" placeholder="Email" className="half" required="" />
  <input type="text" placeholder="Phone" className="half phone" required="" />
  <input
    type="text"
    placeholder="Subject"
    className="subject full"
    required=""
  />
  <textarea
    name="Message"
    id="Message"
    placeholder="Message"
    rows={6}
    className="full"
    required=""
    defaultValue={""}
  />
  <input
    type="submit"
    name="submit"
    id="submit"
    defaultValue="SUBMIT"
    className="main full"
  />
</form>;
