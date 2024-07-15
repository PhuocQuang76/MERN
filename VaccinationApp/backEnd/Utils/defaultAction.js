
const getRegistersByAcceptStatus = (status)=> {
    
    const registeredData = await registerDataModel.find();
    const filteredItems = registeredData.reduce((acc, curr) => {
        curr.items.forEach((item, index) => {
            if (item.status === status) {
                acc.push({ _id: curr._id, userId: curr.userId, itemIndex: index, item });
            }
        });
        return acc;
   
});




adminRouter.get("/getRegisteredByStatus/:status", async (req, res) => {
    const status = req.params.status;
    console.log("status: " + status);
    try {
        const registeredData = await registerDataModel.find();
        const filteredItems = registeredData.reduce((acc, curr) => {
            console.log("filteredItems:"+filteredItems);
            curr.items.forEach((item, index) => {
                if (item.status === status) {
                    acc.push({ _id: curr._id, userId: curr.userId, itemIndex: index, item });
                }
            });
            return acc;
        }, []);
        res.json(filteredItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});