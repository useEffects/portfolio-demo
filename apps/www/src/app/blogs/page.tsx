import { Blogs } from "@/components/blogs";
import { Container } from "@mui/material";

export default async function BlogsPage() {
    return <Container className="my-4">
        <Blogs />
    </Container>
}