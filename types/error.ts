try {
    throw new Error("this is error");
} catch (e) {
    console.log(e.message);
}